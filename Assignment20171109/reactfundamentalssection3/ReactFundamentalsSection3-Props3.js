class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.image} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: {this.props.Name}</h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.User}</h3>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar image = {this.props.user.img}/>
        <Label Name = {this.props.user.name}/>
        <ScreenName User = {this.props.user.username}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={{
    name: 'Tyler McGinnis',
    img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
    username: 'tylermcginnis'
  }} />,
  document.getElementById('app')
);