import React, { Fragment } from "react";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import getAnswerResult from "../../utils/getAnswerResult";

const mapStateToProps = (state) => ({
  answers: state.answers,
});

const Stats = ({ answers, handleSwitchToWelcomeScreen }) => {
  const currentAnswers = answers.map((answer, index) => (
    <li key={index} className={`stats__result ${getAnswerResult(answer)}`} />
  ));

  if (answers.length < 1) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Header
        isGameScreen={false}
        handleSwitchToWelcomeScreen={handleSwitchToWelcomeScreen}
      />
      <main id="main" className="central">
        <section className="result">
          <h2 className="result__title">Победа!</h2>
          <table className="result__table">
            <tbody>
              <tr>
                <td className="result__number">1.</td>
                <td colSpan="2">
                  <ul className="stats">
                    {currentAnswers}
                    {/* <li className="stats__result stats__result--slow" />*/}
                    {/* <li className="stats__result stats__result--fast" />*/}
                    {/* <li className="stats__result stats__result--wrong" />*/}
                    {/* <li className="stats__result stats__result--unknown" />*/}
                  </ul>
                </td>
                <td className="result__points">× 100</td>
                <td className="result__total">900</td>
              </tr>
              <tr>
                <td />
                <td className="result__extra">Бонус за скорость:</td>
                <td className="result__extra">
                  1 <span className="stats__result stats__result--fast" />
                </td>
                <td className="result__points">× 50</td>
                <td className="result__total">50</td>
              </tr>
              <tr>
                <td />
                <td className="result__extra">Бонус за жизни:</td>
                <td className="result__extra">
                  2 <span className="stats__result stats__result--alive" />
                </td>
                <td className="result__points">× 50</td>
                <td className="result__total">100</td>
              </tr>
              <tr>
                <td />
                <td className="result__extra">Штраф за медлительность:</td>
                <td className="result__extra">
                  2 <span className="stats__result stats__result--slow" />
                </td>
                <td className="result__points">× 50</td>
                <td className="result__total">-100</td>
              </tr>
              <tr>
                <td colSpan="5" className="result__total  result__total--final">
                  950
                </td>
              </tr>
            </tbody>
          </table>
          <table className="result__table">
            <tbody>
              <tr>
                <td className="result__number">2.</td>
                <td>
                  <ul className="stats">
                    <li className="stats__result stats__result--wrong" />
                    <li className="stats__result stats__result--slow" />
                    <li className="stats__result stats__result--fast" />
                    <li className="stats__result stats__result--correct" />
                    <li className="stats__result stats__result--wrong" />
                    <li className="stats__result stats__result--unknown" />
                    <li className="stats__result stats__result--slow" />
                    <li className="stats__result stats__result--wrong" />
                    <li className="stats__result stats__result--fast" />
                    <li className="stats__result stats__result--wrong" />
                  </ul>
                </td>
                <td className="result__total" />
                <td className="result__total  result__total--final">fail</td>
              </tr>
            </tbody>
          </table>
          <table className="result__table">
            <tbody>
              <tr>
                <td className="result__number">3.</td>
                <td colSpan="2">
                  <ul className="stats">
                    <li className="stats__result stats__result--wrong" />
                    <li className="stats__result stats__result--slow" />
                    <li className="stats__result stats__result--fast" />
                    <li className="stats__result stats__result--correct" />
                    <li className="stats__result stats__result--wrong" />
                    <li className="stats__result stats__result--unknown" />
                    <li className="stats__result stats__result--slow" />
                    <li className="stats__result stats__result--unknown" />
                    <li className="stats__result stats__result--fast" />
                    <li className="stats__result stats__result--unknown" />
                  </ul>
                </td>
                <td className="result__points">× 100</td>
                <td className="result__total">900</td>
              </tr>
              <tr>
                <td />
                <td className="result__extra">Бонус за жизни:</td>
                <td className="result__extra">
                  2 <span className="stats__result stats__result--alive" />
                </td>
                <td className="result__points">× 50</td>
                <td className="result__total">100</td>
              </tr>
              <tr>
                <td colSpan="5" className="result__total  result__total--final">
                  950
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </Fragment>
  );
};

Stats.propTypes = {
  handleSwitchToWelcomeScreen: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object),
};

Stats.defaultProps = {
  handleSwitchToWelcomeScreen: () => {},
};

export default connect(mapStateToProps)(Stats);
