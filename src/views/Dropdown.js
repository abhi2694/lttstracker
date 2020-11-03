import React from "react";
import "./dates.css";

class SelectDropdown extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        selectedOption: props.selectedOption || props.defaultOption,
        showDropdown: false
      }
    }
  
    toggleDropdown = () => {
      this.setState(prevState => {
        return { showDropdown: !prevState.showDropdown }
      })
    }
  
    setSelectedOption = event => {
      const selectedOption = event.target.getAttribute('value')
      const { onChange } = this.props
  
      this.setState({ selectedOption, showDropdown: false })
  
      if (onChange) {
        onChange(selectedOption)
      }
    }
  
    render() {
      const { showDropdown, selectedOption } = this.state
      const { options, name } = this.props
      const optionKeys = Object.keys(options)
  
      let styles = {
        dropdown: {
          fontFamily: 'Helvetica',
          color: '#6f6f6f',
          letterSpacing: 0.5,
          fontWeight: 300,
          outline: 'none',
          position: 'relative',
          width: '250px',
          display: 'inline-block'
        },
        icon: {
          color: '#CCCCCC',
          fontSize: 16,
          transform: 'none',
          transition: 'all 0.1s ease-in'
        },
        list: {
          background: '#FFFFFF',
          border: '3px solid #EEEEEE',
          borderBottom: 'none',
          borderBottomLeftRadius: '3px',
          borderBottomRightRadius: '3px',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.06)',
          listStyle: 'none',
          marginTop: -1,
          overflow: 'scroll',
          padding: 0,
          position: 'absolute',
          width: '250px',
          zIndex: 10
        },
        listItem: {
          alignItems: 'center',
          borderBottom: '3px solid #EEEEEE',
          cursor: 'pointer',
          display: 'flex',
          fontSize: '14px',
          justifyContent: 'space-between',
          paddingBottom: 15,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 15,
          icon: {
            color: '#31D0EC',
            fontSize: 14
          }
        },
        selectedOption: {
          alignItems: 'center',
          background: '#FFFFFF',
          border: '3px solid #EEEEEE',
          ...(showDropdown && {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }),
          ...(!showDropdown && {
            borderBottomLeftRadius: '3px',
            borderBottomRightRadius: '3px'
          }),
          borderTopLeftRadius: '3px',
          borderTopRightRadius: '3px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: 15,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 15,
          marginBottom: -3
        },
        selectedOptionLink: {
          color: 'inherit',
          fontSize: 14
        }
      }
  
      return (
        <div style={styles.dropdown} tabIndex={1}>
          <div style={styles.selectedOption} onClick={this.toggleDropdown}>
            <a style={styles.selectedOptionLink}>{options[selectedOption]}</a>
            <i className={`fa fa-chevron-${showDropdown ? 'up' : 'down'}`} style={styles.icon} />
          </div>
          <ul className={`${showDropdown ? 'show' : ''}`} style={styles.list}>
            {
              optionKeys.map((optionKey, index) => (
                <li style={styles.listItem} key={index} name={name} value={optionKey} onClick={this.setSelectedOption}>
                  {options[optionKey]}
                  <i className={`far fa-${selectedOption === optionKey ? 'dot-circle' : 'circle'}`} style={styles.listItem.icon} />
                </li>
              ))
            }
          </ul>
        </div>
      )
    }
  }
  
  class Demo extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        selectedOption: 'october'
      }
    }
  
    setOption = (selectedOption) => {
      this.setState({ selectedOption })
    }
  
    render() {
      const name = 'select'
      const selectedOption = this.state.selectedOption
      const options = {
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        october: 'October',
        november:'November',
        december: 'December'
      }
  
      return (
        <SelectDropdown
          name={name}
          onChange={this.setOption}
          options={options}
          selectedOption={selectedOption}
        />
      )
    }
  }
  
export default Demo;