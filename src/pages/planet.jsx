import { useDispatch, useSelector } from 'react-redux';
import {
  setPlanetSearch,
  setPlanetData,
  setmouseOver,
  setLoading,
} from '../slices/Slice1';
import { useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
const Planet = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  async function getData(text) {
    dispatch(setLoading(true));
    const fetchedData = await fetch(
      `https://swapi.dev/api/planets/?search=${text}`
    );
    const PlanetsResp = await fetchedData.json();
    dispatch(setPlanetData(PlanetsResp));
    dispatch(setLoading(false));
  }
  useEffect(() => {
    if (data.PlanetSearch !== '') getData(data.PlanetSearch);
    else dispatch(setPlanetData([]));
  }, [data.PlanetSearch]);
  function divideToSingleDigit(number) {
    let count = 0;
    while (number >= 10) {
      number = Math.floor(number / 10);
      count += 1;
    }
    return count;
  }

  return (
    <div>
      {data.Loading && <p>Loading...</p>}
      <div>Search for planets </div>
      <br />
      <div>
        <input
          id="search"
          type="text"
          placeholder="a"
          value={data.PlanetSearch}
          onChange={(e) => dispatch(setPlanetSearch(e.currentTarget.value))}
        />
      </div>
      {data.PlanetData.count !== 0 ? (
        <section>
          <header>
            <div className="col">Name</div>
            <div className="col">Population</div>
          </header>

          {data.PlanetData.results?.map((ele, i) => (
            <div key={i} className="colRows">
              <div className="col">{ele.name}</div>
              <div title="200000" className="col">
                <span
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={ele.population}
                  place="bottom"
                >
                  {ele.population !== 'unknown' &&
                    new Array(
                      Math.ceil(
                        Number(ele.population) /
                          Math.pow(10, divideToSingleDigit(ele.population))
                      )
                    )
                      .fill(0)
                      .map((ele, j) => (
                        <span
                          key={j}
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={ele.population}
                          place="bottom"
                        >
                          {'\u{1F468}'}
                        </span>
                      ))}
                </span>
                <Tooltip id="my-tooltip" />
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div>
          <br />
          <div className="error">No planet matching search term</div>
        </div>
      )}
    </div>
  );
};

export default Planet;
