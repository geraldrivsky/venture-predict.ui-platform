import React, { useRef, useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { getStyle } from './Dashboard.style';
import { abbreviateNumber } from '../../helpers';
import { Search } from '../../assets/svgs';
import { getData } from './Dashboard.data';
import {
  switchActiveNavItemIndex,
  filterStartups,
  fetchStartupsData,
} from '../../modules/dashboard/dashboard.reducer';
import { StartupInfo } from '../../widgets';
import { DashboardBtn } from '../../visualisers';

interface Startup {
  name: string;
  id: string;
  description: string;
  views: string;
  followers: string;
  lastUpdated: string;
  investAbility: string;
  industry: string;
  technology: string;
  url: string;
  location: string;
  isFollowed: boolean;
  isShared: boolean;
}

interface OwnProps {
  navCounters: {
    startupsCounter: number;
    followingCounter: number;
    sharedWithMeCounter: number;
  };
}
interface StateProps {
  activeNavItemIndex: number;
  startups: Startup[];
  filteredStartups: Startup[];
}

interface DispatchProps {
  switchActiveNavItemIndex: (navItemIndex: number) => Function;
  filterStartups: (inputValue: string) => Function;
  fetchStartupsData: () => Function;
}

type Props = StateProps & DispatchProps & OwnProps;

const Dashboard: FunctionComponent<Props> = ({
  navCounters,
  activeNavItemIndex: index,
  filteredStartups,
  fetchStartupsData,
  filterStartups,
  switchActiveNavItemIndex,
}) => {
  const data = getData(navCounters);

  const {
    sup,
    getSvgColor,
    parent,
    ul,
    li,
    labelSpan,
    top,
    grid,
    btn,
    navSpan,
    firstSpan,
    table,
    btns,
    lastBtn,
    moreWrap,
    firstSpanMiddle,
    topTitle,
    firstSpanTop,
    firstSpanBottom,
  } = getStyle(index);

  const search = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const startupsInfoList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchStartupsData();
  }, [fetchStartupsData]);

  return (
    <div
      className="card"
      style={{
        ...parent,
      }}
    >
      {index === 3 ? (
        <div style={moreWrap}>
          <div style={top}>
            <h2 style={topTitle}>{data[index].title}</h2>
          </div>
          <div style={btns}>
            {data[3].btns?.map(({ text, id }: any, i: number) => (
              <DashboardBtn
                key={id.toString()}
                style={i === 3 ? { ...btn, ...lastBtn } : btn}
              >
                {text}
              </DashboardBtn>
            ))}
          </div>
        </div>
      ) : (
        <div style={table}>
          <div className="top">
            <h3 className="top__title h3-19-sb">{data[index].navTitle}</h3>
            <div ref={search} className="search top__search">
              <input ref={searchInput} className="search__input p-fz-11" />
              <button
                type="submit"
                className="search__submit"
                onClick={() => {
                  if (search.current!.classList.contains('search_active')) {
                    filterStartups(searchInput.current!.value);
                  }
                  search.current!.classList.toggle('search_active');
                }}
              >
                <Search />
              </button>
            </div>
          </div>
          <div style={grid}>
            <div style={{ ...labelSpan, ...firstSpan }} className="p-xs-8">
              <div style={firstSpanTop}></div>
              <div style={firstSpanMiddle}></div>
              <div style={firstSpanBottom}></div>
            </div>
            <span style={labelSpan} className="p-xs-8">
              VIEWS
              <br /> FOLLOWERS
            </span>
            <span style={labelSpan} className="p-xs-8">
              LAST
              <br /> UPDATED
            </span>
            <span style={labelSpan} className="p-xs-8">
              INVEST-
              <br />
            </span>
          </div>
          {index === 0 && (
            <DashboardBtn style={btn}>{data[0].btn?.text}</DashboardBtn>
          )}
          <div ref={startupsInfoList} className="startups-table">
            {filteredStartups.map((node: any, i: number, nodes: Array<any>) => {
              return (
                <>
                  <StartupInfo properties={node} />
                  {index > 0 && index < 3 && nodes.length === i + 1 && (
                    <DashboardBtn style={btn}>
                      {data[index].btn?.text}
                    </DashboardBtn>
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
      <ul className="dashboard-nav" style={ul}>
        {data.map(({ Svg, navTitle, supCounter, id }, i) => {
          return (
            <li
              className="nav__item"
              key={id.toString()}
              style={li(i)}
              onClick={({ currentTarget: target }: any) => {
                const currentLiIndex = Array.from(
                  target.parentElement.children
                ).findIndex((li) => target === li);

                switchActiveNavItemIndex(currentLiIndex);
              }}
            >
              <Svg color={getSvgColor(i)} />
              <span style={navSpan}>{navTitle}</span>
              {sup ? (
                <sup style={sup}>{abbreviateNumber(supCounter)}</sup>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (
  { DashboardState: { activeNavItemIndex, startups, filteredStartups } }: any,
  ownProps: OwnProps
): StateProps => ({
  activeNavItemIndex,
  startups,
  filteredStartups,
});

const mapDispathToProps: DispatchProps = {
  switchActiveNavItemIndex,
  filterStartups,
  fetchStartupsData,
};

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispathToProps
)(Dashboard);
