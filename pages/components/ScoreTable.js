const ScoreTable = (props) => {
  const { scoreTableRow, scoreTableBottomRowRef } = props;

  return (
    <>
      <h4 className="table-heading">Score Board</h4>
      <div className="score-table text-center table-scroll mb-5">
        <table className="table table-bordered">
          <thead className="sticky-top">
            <tr>
              <th scope="col" className="thead">
                Icons Pair
              </th>
              <th scope="col" className="thead">
                Player1
              </th>
              <th scope="col" className="thead">
                Player2
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(scoreTableRow) && scoreTableRow.map((el, idx) => (
              <tr style={{ height: "35px" }} key={idx}>
                <td className="tcell">
                  <span style={{ margin: "5px", fontSize: "15px" }}>
                    {el[0]}
                  </span>
                  <span style={{ margin: "5px", fontSize: "15px" }}>
                    {el[1]}
                  </span>
                </td>
                <td className="tcell">{el[2]}</td>
                <td className="tcell">{el[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bottom row" ref={scoreTableBottomRowRef} />
      </div>
    </>
  );
};

export default ScoreTable;
