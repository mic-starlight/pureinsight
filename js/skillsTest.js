$(document).ready(() => {
    showSkills();
    plot();

    function showSkills() {
        let html = `
            <div class="row bg-dark">
                <div class="col">
                    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                        <span class="navbar-brand mb-0 h1">Analytics</span>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link myunderline" href="#">Skills <span class="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row text-center bg-dark text-light">
                <div class="col">
                    <p>SKILLS ASSESSED</p>
                    <p class="display-4">5</p>
                </div>
                <div class="col">
                    <p>ASSESSMENTS TAKEN</p>
                    <p class="display-4">13</p>
                </div>
                <div class="col">
                    <p>STRONGEST SKILL</p>
                    <p class="display-4">Bootstrap</p>
                </div>
            </div>
            <div class="row text-center bg-dark">
                <div class="col-10 mx-auto my-3" id="chart">
                </div>
            </div>
            <div class="row text-center bg-dark">
                <div class="col-10 mx-auto table-responsive">
                    <table class="table table-dark">
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
                                <td>HTML</td>
                                <td>48</td>
                                <td>Novice</td>
                                <td>4</td>
                                <td>60</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td>48</td>
                                <td>Novice</td>
                                <td>4</td>
                                <td>60</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>JavaScript</td>
                                <td>48</td>
                                <td>Novice</td>
                                <td>4</td>
                                <td>60</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>JQuery</td>
                                <td>48</td>
                                <td>Novice</td>
                                <td>4</td>
                                <td>60</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Bootstrap</td>
                                <td>48</td>
                                <td>Novice</td>
                                <td>4</td>
                                <td>60</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        $('.skills').html(html);
    }

    function plot() {
        var trace1 = {
            x: ['html', 'css', 'js', 'jquery', 'bootstrap'],
            y: [20, 14, 23, 20, 30],
            width: [0.5, 0.5, 0.5, 0.5, 0.5],
            name: 'Novice',
            type: 'bar',
            marker: {
                color: '#fdad35'
            }
        };

        var trace2 = {
            x: ['html', 'css', 'js', 'jquery', 'bootstrap'],
            y: [20, 14, 23, 20, 30],
            width: [0.5, 0.5, 0.5, 0.5, 0.5],
            name: 'Proficient',
            type: 'bar',
            marker: {
                color: '#35fd72'
            }
        };

        var trace3 = {
            x: ['html', 'css', 'js', 'jquery', 'bootstrap'],
            y: [20, 14, 23, 20, 30],
            width: [0.5, 0.5, 0.5, 0.5, 0.5],
            name: 'Expert',
            type: 'bar',
            marker: {
                color: '#35bdfd'
            }
        };

        var data = [trace1, trace2, trace3];
        var layout = {
            barmode: 'stack',
            plot_bgcolor: "black",
            paper_bgcolor: "black",
        };
        Plotly.newPlot('chart', data, layout, {
            responsive: true
        });
    }
})