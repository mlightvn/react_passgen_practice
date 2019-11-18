import React, { Component } from 'react'

class TextModal extends Component {

  constructor(props) {
    super(props)

    this.initialState = {
      text : {
        input: {label: 'Input', value: ''},
        output: {label: 'Output', value: ''},
      },
      isModalShowed : false,
      copied: false,
    }

    this.state = {...this.initialState}

    this.handleInputChanged = this.handleInputChanged.bind(this)
    this.handleUniqueLines = this.handleUniqueLines.bind(this)
  }

  copyToClipboard = (e) => {
    const el = e.target
    el.select()
    document.execCommand("copy")
    this.setState({copied: true})
  }

  handleInputChanged(e) {
    let jaconv = require("jaconv")
    let input = e.target.value

//     let newJapaneseTypes = this.state.japanese

//     newJapaneseTypes.input.value             = input
//     newJapaneseTypes.hebon.value             = jaconv.toHebon(input)

//     newJapaneseTypes.katakana.value          = jaconv.toKatakana(input)
//     newJapaneseTypes.hiragana.value          = jaconv.toHiragana(input)
//     newJapaneseTypes.hankaku_ascii.value     = jaconv.toHanAscii(input)
//     newJapaneseTypes.zenkaku_ascii.value     = jaconv.toZenAscii(input)
//     newJapaneseTypes.hankaku_kana.value      = jaconv.toHanKana(input)
//     newJapaneseTypes.zenkaku_kana.value      = jaconv.toZenKana(input)
//     newJapaneseTypes.hankaku.value           = jaconv.toHan(input)
//     newJapaneseTypes.zenkaku.value           = jaconv.toZen(input)
//     newJapaneseTypes.normalize.value         = jaconv.normalize(input)
// // console.log(newJapaneseTypes.japanese)
// // console.log(newJapaneseTypes)
//     this.setState({japanese: newJapaneseTypes})

  }

  handleUniqueLines(e){
    let $inputs = document.getElementsByName("text[input]")
    let $input = ($inputs.length > 0) ? $inputs.item(0) : null
    if($input){
      let input = $input.value
      let arr = input.split('\n')

      // Filter Arrow: https://qiita.com/piroor/items/02885998c9f76f45bfa0
      let unique_arr = arr.filter((value, index, self) => {return self.indexOf(value) === index})
      // let unique_arr = [...new Set(arr)]
      let result = unique_arr.join('\n')

      let state = this.state
      state.text.output.value = result

    this.setState(state)
    }
  }

  render() {

    // var outputRecordArr = Object.values(this.state.japanese)
    // var outputRecordList = outputRecordArr.map((element, index) => {
    //     return (
    //                   <tr key={index}>
    //                     <td>{element.label}
    //                     </td>
    //                     <td>
    //                       <input type="text" className="form-control"
    //                         name="japanese[{index}]"
    //                         value={element.value}
    //                         readOnly="readOnly"
    //                       />
    //                     </td>
    //                   </tr>
    //     )
    // })

    return (
      <>
        <div className="modal" id="modalText">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">Text 変換</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <table className="table">
                    <tbody>
                      <tr>
                        <td width="150">Input
                        </td>
                        <td>
                          <textarea type="text" className="form-control"
                            name="text[input]"
                            onChange={this.handleInputChanged}
                            rows="10"
                          >
                          </textarea>
                        </td>
                      </tr>

                      <tr>
                        <td>{this.state.text.output.label}
                        </td>
                        <td>
                          <textarea type="text" className="form-control"
                            name="text[output]"
                            value={this.state.text.output.value}
                            readOnly="readOnly"
                            rows="10"
                          >
                          </textarea>
                        </td>
                      </tr>


                    </tbody>
                    </table>

                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.handleUniqueLines}>Unique Lines</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>

      </>
    );
  }

}

export default TextModal
