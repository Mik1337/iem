$(function () {
    "use strict";
    class App extends React.Component {
      render () {
        var divConfig = {
            title: this.props.title,
            paper: this.props.paper,
            notes: this.props.notes,
            video: this.props.video,
            dload: this.props.dload,
        };

        return (
          <div className="parallax container-fluid">
            <p className="title"> { divConfig.title } </p>
            <p className="decor"> <a href={ divConfig.paper}> <i class="fas fa-paperclip"></i> Papers </a></p>
            <p className="decor"> <a href={ divConfig.notes }> <i class="fas fa-book-open"></i> Notes </a></p>
            <p className="video"> <iframe src={ divConfig.video } frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Videos </a></p>
            // <p className="video"> <a href={ divConfig.video }> Videos </a></p>
            <p className="decor"> <a href={ divConfig.dload }> <i class="fas fa-file-download"></i> Downloads </a></p>
          </div>
        )
      }
    }

    class Tik extends React.Component {
      handleClick(e, id) {
        e.preventDefault();
        $.ajax({
            type: 'GET', url: 'https://raw.githubusercontent.com/Mik1337/iem/beta/resources/manifest.js'
        }).done(function(data) {
            var object = jQuery.parseJSON(data);
            ReactDOM.render(
              <App title={object[id].title} paper={object[id].paper} notes={object[id].notes} video={object[id].video} dload={object[id].downloads} />,
              document.getElementById("app")
            );
        });
        // console.log(e.target)
      }
      render() {
        return (
          <div>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"btd")} href="#btd"> Basics Of Thermodynamics</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"fm")} href="#fm">  Fluid Mechanics </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"mmm")} href="#mmm">  Mechanical Measurement And Metrology </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"mom")} href="#mom">  Mechanics Of Materials </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"mp1")} href="#mp1">  Manufacturing Process 1 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"camd")} href="#camd">  Computer Aided Machine Drawing </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"kom")} href="#kom">  Kinematics Of Machines </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"cadcam")} href="#cadcam">  Computer Aided Design And Manufacturing </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"mp2")} href="#mp2">  Manufacturing Process 2 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"msm")} href="#msm">  Materials Science And Metallurgy </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"me")} href="#me">  Management & Entrepreneurship </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"wse")} href="#wse">  Work study and Ergonomics </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"dme")} href="#dme">  Design of Machine Elements </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"se")} href="#se">  Statistics for Engineers </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"ee")} href="#ee">  Engineering Economy </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"hrm")} href="#hrm">  Human Resource Management </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"qar")} href="#qar">  Quality Assurance and Reliability  </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"or")} href="#or">  Operations Research  </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"sma")} href="#sma">  Simulation Modeling and Analysis  </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"mm")} href="#mm">  Materials Management  </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"sem")} href="#sem">  Software Engineering and Management  </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" onClick={e => this.handleClick(e,"ve")} href="#ve">  Value Engineering  </a>
            </li>
          </ul>
        </div>
        )
      }
    }

    ReactDOM.render(<Tik/>, document.getElementById("tik"))

});
