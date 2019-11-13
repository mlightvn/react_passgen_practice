import React, { Component } from 'react'

class JapaneseModal extends Component {

  constructor(props) {
    super(props)

    this.initialState = {
      japanese : {
        input: {label: 'Input', value: ''},
        hebon: {label: 'Hebon', value: ''},
        katakana: {label: 'Katakana', value: ''},
        hiragana: {label: 'Hiragana', value: ''},
        hankaku_ascii: {label: 'Hankaku Ascii', value: ''},
        zenkaku_ascii: {label: 'Zenkaku Ascii', value: ''},
        hankaku_kana: {label: 'Hankaku Kana', value: ''},
        zenkaku_kana: {label: 'Zenkaku Kana', value: ''},
        hankaku: {label: 'Hankaku', value: ''},
        zenkaku: {label: 'Zenkaku', value: ''},
        normalize: {label: 'Normalize', value: ''},
      },
      isModalShowed : false,
      copied: false,
    }

    this.state = {...this.initialState}

    this.handleInputChanged = this.handleInputChanged.bind(this)
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

    let newJapaneseTypes = this.state.japanese

    newJapaneseTypes.input.value             = input
    newJapaneseTypes.hebon.value             = jaconv.toHebon(input)

    newJapaneseTypes.katakana.value          = jaconv.toKatakana(input)
    newJapaneseTypes.hiragana.value          = jaconv.toHiragana(input)
    newJapaneseTypes.hankaku_ascii.value     = jaconv.toHanAscii(input)
    newJapaneseTypes.zenkaku_ascii.value     = jaconv.toZenAscii(input)
    newJapaneseTypes.hankaku_kana.value      = jaconv.toHanKana(input)
    newJapaneseTypes.zenkaku_kana.value      = jaconv.toZenKana(input)
    newJapaneseTypes.hankaku.value           = jaconv.toHan(input)
    newJapaneseTypes.zenkaku.value           = jaconv.toZen(input)
    newJapaneseTypes.normalize.value         = jaconv.normalize(input)
// console.log(newJapaneseTypes.japanese)
// console.log(newJapaneseTypes)
    this.setState({japanese: newJapaneseTypes})

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
        <div className="modal" id="modalJapaneseIME">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">IME変換</h4>
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
                          <input type="text" className="form-control"
                            name="japanese[input]"
                            onChange={this.handleInputChanged}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>{this.state.japanese.hebon.label}
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[hebon]"
                            value={this.state.japanese.hebon.value}
                            readOnly="readOnly"
                            onClick={this.copyToClipboard}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>{this.state.japanese.katakana.label}
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[katakana]"
                            value={this.state.japanese.katakana.value}
                            readOnly="readOnly"
                            onClick={this.copyToClipboard}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>{this.state.japanese.hiragana.label}
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[hiragana]"
                            value={this.state.japanese.hiragana.value}
                            readOnly="readOnly"
                            onClick={this.copyToClipboard}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{this.state.japanese.hankaku_ascii.label}
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[hankaku_ascii]"
                            value={this.state.japanese.hankaku_ascii.value}
                            readOnly="readOnly"
                            onClick={this.copyToClipboard}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{this.state.japanese.zenkaku_ascii.label}
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[zenkaku_ascii]"
                            value={this.state.japanese.zenkaku_ascii.value}
                            readOnly="readOnly"
                            onClick={this.copyToClipboard}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{this.state.japanese.hankaku_kana.label}
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[hankaku_kana]"
                            value={this.state.japanese.hankaku_kana.value}
                            readOnly="readOnly"
                            onClick={this.copyToClipboard}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{this.state.japanese.zenkaku_kana.label}
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[zenkaku_kana]"
                            value={this.state.japanese.zenkaku_kana.value}
                            readOnly="readOnly"
                            onClick={this.copyToClipboard}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{this.state.japanese.hankaku.label}
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[hankaku]"
                            value={this.state.japanese.hankaku.value}
                            readOnly="readOnly"
                            onClick={this.copyToClipboard}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{this.state.japanese.zenkaku.label}
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[zenkaku]"
                            value={this.state.japanese.zenkaku.value}
                            readOnly="readOnly"
                            onClick={this.copyToClipboard}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{this.state.japanese.normalize.label}
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[normalize]"
                            value={this.state.japanese.normalize.value}
                            readOnly="readOnly"
                            onClick={this.copyToClipboard}
                          />
                        </td>
                      </tr>

                    </tbody>
                    </table>

                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>

      </>
    );
  }

}

export default JapaneseModal
