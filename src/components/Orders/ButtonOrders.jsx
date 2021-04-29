/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
// import {useRef} from 'react'
// // import React from 'react'

const btnRef = useRef()

const onBtnClick = () => {
  if (btnRef.current) {
    btnRef.current.setAttribute('disabled', 'disabled')
  }
}

<button ref={btnRef} onClick={onBtnClick}>
  Send
</button>

// import React from 'react'
// import Button from '@material-ui/core/Button'

// export default class SearchComponent extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       isDisabled: false,
//     }
//   }

//   handleSubmitClicked() {
//     this.setState({
//       isDisabled: true,
//     })

//     setTimeout(() => {
//       this.enableComponents()
//     }, 3000)
//   }

//   enableComponents() {
//     this.setState({
//       isDisabled: false,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <Button variant='contained' color='primary'
//           disabled={this.state.isDisabled}
//           onClick={this.handleSubmitClicked.bind(this)}
//         >
//           Ver numero de orden
//         </Button>
//       </div>
//     )
//   }
// }
