$(function () {
    "use strict";
    class App extends React.Component {
      render () {
        var divConfig = {
            title: this.props.title,
            paper: this.props.paper,
            notes: this.props.notes,
            video: this.props.video,
            downloads: this.props.downloads,
        };

        return (
          <div className="parallax">
            <p className="title"> { divConfig.title } </p>
            <p className="decor"> <a href={ divConfig.paper}> Papers </a></p>
            <p className="decor"> <a href={ divConfig.notes }> Notes </a></p>
            <p className="video"> <a href={ divConfig.video }> Videos </a></p>
            <p className="decor"> <a href={ divConfig.downloads }> Downloads </a></p>
          </div>
        )
      }
    }

    class Tik extends React.Component {
      handleClick(e, id) {
        e.preventDefault();

        $.ajax({
            type: 'GET', url: 'https://nyander-api.herokuapp.com/id'
        }).done(function(data) {
            var object = jQuery.parseJSON(data);
            ReactDOM.render(
              <App title=object.title paper=object.paper notes=object.notes video=object.video downloads=object.downloads />,
              document.getElementById("app")
            );
        });
        // console.log(e.target)
      }
      render() {
        return (
          <div>
          <p>Justified tabs</p>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"btd")} href="#btd"> Basics Of Thermodynamics</a>
            </li>
          </ul>
        </div>
        )
      }
    }

    ReactDOM.render(<Tik/>, document.getElementById("tik"))

});
