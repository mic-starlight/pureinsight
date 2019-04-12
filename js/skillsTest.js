$(document).ready(() => {
    showSkills();

    $('a.skills').click(function () {
        console.log('click skills');
        showSkills();
    })

    function showSkills() {
        let html = `
            <div class="row">
                <div class="col mb-3">
                    <nav class="navbar navbar-expand-sm navbar-dark">
                        <span class="navbar-brand mb-0 h1">Analytics</span>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link myunderline skills">Skills <span class="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row text-center text-light">
                <div class="col-md-3 col-sm-12 text-left p-5">
                    <p class="h5">View skill proficiency across your team</p>
                    <p class="text-muted text-light">Updated at ${new Date().toUTCString()}</p>
                    <hr>
                    <h6 class="text-muted">What are Skills Analytics?</h6>
                    <p class="text-light text-muted">This report presents aggregated data from skill assessments taken by our test system.</p>
                    <hr>
                    <p class="h6 text-muted">Still have questions?</p>
                    <p class="text-muted">Ask <a href="https://www.facebook.com/profile.php?id=100008438893485" class="mylink">Professional</a></p>
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <p>SKILLS ASSESSED</p>
                            <p class="display-4">5</p>
                        </div>
                        <div class="col">
                            <p>ASSESSMENTS TAKEN</p>
                             <p class="display-4">5</p>
                        </div>
                        <div class="col">
                            <p>STRONGEST SKILL</p>
                            <p class="display-4">HTML</p>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-12 my-3">
                            <div id="chart">
                            </div>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-12 table-responsive">
                            <table class="table table-dark table-hover">
                                <thead class="text-muted">
                                    <tr>
                                        <th>SKILLS</th>
                                        <th>AVG SKILL</th>
                                        <th>SKILL LEVEL</th>
                                        <th>LOWEST SCORE</th>
                                        <th>HIGHEST SCORE</th>
                                        <th>ASSESSMENTS TAKEN</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span class="html">HTML</span></td>
                                        <td>100</td>
                                        <td><span class="expert">Expert</span></td>
                                        <td>100</td>
                                        <td>100</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><span class="css">CSS</span></td>
                                        <td>14</td>
                                        <td><span class="novice">Novice</span></td>
                                        <td>14</td>
                                        <td>14</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><span class="js">JavaScript</td>
                                        <td>60</td>
                                        <td><span class="proficient">Proficient</span></td>
                                        <td>60</td>
                                        <td>60</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><spna class="jquery">JQuery</span></td>
                                        <td>20</td>
                                        <td><span class="novice">Novice</novice></td>
                                        <td>20</td>
                                        <td>20</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><span class="bootstrap">Bootstrap</span></td>
                                        <td>30</td>
                                        <td><span class="novice">Novice</span></td>
                                        <td>30</td>
                                        <td>30</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>   
            </div>
        `;

        $('.skills').html(html);
        plot();
    }

    function plot(fields = ['html', 'css', 'js', 'jquery', 'bootstrap'], scores = [100, 14, 60, 20, 30]) {
        var scoreNovice = [];
        var scoreProficient = [];
        var scoreExpert = [];
        var score = 0;
        for (const value of scores) {
            if (value > 80 && value <= 100) {
                scoreExpert.push(value - 80);
                scoreProficient.push(40);
                scoreNovice.push(40);
            } else if (value > 40 && value <= 80) {
                scoreExpert.push(0);
                scoreProficient.push(value - 40);
                scoreNovice.push(40);
            } else if (value < 40) {
                scoreExpert.push(0);
                scoreProficient.push(0);
                scoreNovice.push(value);
            } else if (value < 0) {
                scoreExpert.push(0);
                scoreProficient.push(0);
                scoreNovice.push(0);
            } else if (value > 100) {
                scoreExpert.push(20);
                scoreProficient.push(40);
                scoreNovice.push(40);
            }
        }

        var trace1 = {
            x: fields,
            y: scoreNovice,
            width: [0.5, 0.5, 0.5, 0.5, 0.5],
            name: 'Novice',
            type: 'bar',
            marker: {
                color: '#fdad35'
            }
        };

        var trace2 = {
            x: fields,
            y: scoreProficient,
            width: [0.5, 0.5, 0.5, 0.5, 0.5],
            name: 'Proficient',
            type: 'bar',
            marker: {
                color: '#35fd72'
            }
        };

        var trace3 = {
            x: fields,
            y: scoreExpert,
            width: [0.5, 0.5, 0.5, 0.5, 0.5],
            name: 'Expert',
            type: 'bar',
            marker: {
                color: '#35bdfd'
            }
        };

        var data = [trace1, trace2, trace3];
        var layout = {
            title: 'Average Skills',
            barmode: 'stack',
            plot_bgcolor: "rgb(47, 47, 53)",
            paper_bgcolor: "rgb(47, 47, 53)",
            font: {
                color: 'rgba(255, 254, 254, 0.87)',
            }
        };
        Plotly.newPlot('chart', data, layout, {
            responsive: true
        });
    }
})