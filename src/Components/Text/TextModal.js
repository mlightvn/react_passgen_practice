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

    this.handleToHiragana = this.handleToHiragana.bind(this)
    this.handleUniqueLines = this.handleUniqueLines.bind(this)
  }

  copyToClipboard = (e) => {
    const el = e.target
    el.select()
    document.execCommand("copy")
    this.setState({copied: true})
  }

  handleToHiragana(e){
    let $inputs = document.getElementsByName("text[input]")
    let $input = ($inputs.length > 0) ? $inputs.item(0) : null
    if($input){
      let jaconv = require("jaconv")

      let input = $input.value
      let arr = input.split('\n')

      let unique_arr = arr.map((value, index, self) => {return jaconv.toHiragana(value) })
      let result = unique_arr.join('\n')

      let state = this.state
      state.text.output.value = result

      this.setState(state)
    }
  }

  handleUniqueLines(e){
    let $inputs = document.getElementsByName("text[input]")
    let $input = ($inputs.length > 0) ? $inputs.item(0) : null
    if($input){
      let input = $input.value
      let arr = input.split('\n')

      // Filter Arrow: https://qiita.com/piroor/items/02885998c9f76f45bfa0
      let unique_arr = arr.filter((value, index, self) => {return self.indexOf(value) === index})
      let result = unique_arr.join('\n')

      let state = this.state
      state.text.output.value = result

      this.setState(state)
    }
  }

  render() {

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
                            defaultValue={this.state.text.input.value}
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
                <button type="button" className="btn btn-primary" onClick={this.handleToHiragana}>ひらがなへ</button>
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
