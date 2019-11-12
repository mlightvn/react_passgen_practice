import React, { Component } from 'react'

class JapaneseModal extends Component {

  constructor(props) {
    super(props)

    this.initialState = {
      japanese : {
        input: '',
        hebon: '',
        katakana: '',
        hiragana: '',
        hankaku_ascii: '',
        zenkaku_ascii: '',
        hankaku_kana: '',
        zenkaku_kana: '',
        hankaku: '',
        zenkaku: '',
        normalize: '',
      },
      isModalShowed : false,
    }

    this.state = {...this.initialState}

    this.handleInputChanged = this.handleInputChanged.bind(this)
  }

  handleInputChanged(e) {
    let jaconv = require("jaconv")
    let input = e.target.value

    let newJapaneseTypes = this.state

    newJapaneseTypes.japanese.input             = input
    newJapaneseTypes.japanese.hebon             = jaconv.toHebon(input)

    newJapaneseTypes.japanese.katakana          = jaconv.toKatakana(input)
    newJapaneseTypes.japanese.hiragana          = jaconv.toHiragana(input)
    newJapaneseTypes.japanese.hankaku_ascii     = jaconv.toHanAscii(input)
    newJapaneseTypes.japanese.zenkaku_ascii     = jaconv.toZenAscii(input)
    newJapaneseTypes.japanese.hankaku_kana      = jaconv.toHanKana(input)
    newJapaneseTypes.japanese.zenkaku_kana      = jaconv.toZenKana(input)
    newJapaneseTypes.japanese.hankaku           = jaconv.toHan(input)
    newJapaneseTypes.japanese.zenkaku           = jaconv.toZen(input)
    newJapaneseTypes.japanese.normalize         = jaconv.normalize(input)
// console.log(newJapaneseTypes.japanese)
// console.log(newJapaneseTypes)
    this.setState(newJapaneseTypes)

  }

  render() {

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
                        <td>Hebon
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[hebon]"
                            value={this.state.japanese.hebon}
                            disabled="disabled"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Katakana
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[katakana]"
                            value={this.state.japanese.katakana}
                            disabled="disabled"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Hiragana
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[hiragana]"
                            value={this.state.japanese.hiragana}
                            disabled="disabled"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Hankaku Ascii
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[hankaku_ascii]"
                            value={this.state.japanese.hankaku_ascii}
                            disabled="disabled"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Zenkaku Ascii
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[zenkaku_ascii]"
                            value={this.state.japanese.zenkaku_ascii}
                            disabled="disabled"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Hankaku kana
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[hankaku_kana]"
                            value={this.state.japanese.hankaku_kana}
                            disabled="disabled"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Zenkaku kana
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[zenkaku_kana]"
                            value={this.state.japanese.zenkaku_kana}
                            disabled="disabled"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Hankaku
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[hankaku]"
                            value={this.state.japanese.hankaku}
                            disabled="disabled"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Zenkaku
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[zenkaku]"
                            value={this.state.japanese.zenkaku}
                            disabled="disabled"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Normalize
                        </td>
                        <td>
                          <input type="text" className="form-control"
                            name="japanese[normalize]"
                            value={this.state.japanese.normalize}
                            disabled="disabled"
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
