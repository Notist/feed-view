/* eslint-disable no-unused-vars */

import React from 'react';
import { Card, CardActions } from 'material-ui/Card';
import { MdComment, MdForum, MdGroup } from 'react-icons/lib/md';
import { yellow200, fullBlack } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';
import Upvote from './Upvote';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    '@media (max-width: 1000px)': {
      flexDirection: 'column',
    },
  },
  leftFlex: {
    flex: 2,
  },
  rightFlex: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  imageStyle: {
    alignSelf: 'center',
  },
  usersAndAnnotations: {
    display: 'flex',
    justifyContent: 'space-around',
    '@media (max-width: 1000px)': {
      display: 'none',
    },
  },
  cardButtons: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      margin: 10,
      alignItems: 'center',
    },
  },
  bottomButton: {
    '@media (max-width: 900px)': {
      marginTop: 15,
    },
  },
  annotationTextStyle: {
    position: 'relative',
    fontSize: 14,
  },
  articleTitleTextStyle: {
    fontWeight: 700,
    fontSize: 26,
  },
  articleTextStyle: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 100,
    backgroundColor: yellow200,
  },
  domainTextStyle: {
    fontSize: 10,
    textDecoration: 'underline',
  },
});

class ArticleCard extends React.Component {
  render() {
    const {
      title,
      domain,
      numUsers,
      numReplies,
      username,
      points,
      timeSince,
      currentVotes,
      image,
      slug,
    } = this.props;
    let cardStyle;
    if (this.props.narrowCard) {
      cardStyle = {
        maxWidth: '40%',
        margin: 30,
      };
    } else {
      cardStyle = {
        margin: 30,
      };
    }
    return (
      <MuiThemeProvider>
        <Card style={cardStyle}>
          <div className={css(styles.flexContainer)}>
            <div className={css(styles.leftFlex)}>
              <span className={css(styles.articleTitleTextStyle)}>{title}</span>
              <div className={css(styles.domainTextStyle)}>
                <a style={{ color: fullBlack }} href={domain} target="_blank" rel="noopener noreferrer">{domain}</a>
              </div>
              <div style={{ marginTop: 8 }}>
                <span className={css(styles.articleTextStyle)}>&quot;{this.props.subtitle}&quot;</span>
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ fontWeight: 900 }}>{username}</span>
                <span style={{ fontStyle: 'italic', paddingLeft: 12 }}>{points} points</span>
                <span style={{ paddingLeft: 12 }}>{timeSince} ago</span>
                <span className={css(styles.annotationTextStyle)}><br />{this.props.annotationContent}</span>
              </div>
            </div>
            {this.props.narrowCard ? '' :
            <div className={css(styles.rightFlex)}>
              <div className={css(styles.usersAndAnnotations)}>
                <span><MdGroup /> {numUsers} users</span>
                <span><MdComment /> {this.props.numAnnotations} annotations</span>
              </div>
              <div className={css(styles.imageStyle)}>
                <img width={'100%'} style={{ maxHeight: '35%' }} src={image} alt="nothing for this article" />
              </div>
            </div> }
          </div>
          <CardActions className={css(styles.cardButtons)}>
            <Link
              to={{
                pathname: `/discussion/${slug}`,
                state: {
                  articleId: slug,
                  articleURI: domain,
                },
              }}
            >
              <RaisedButton className={css(styles.bottomButton)} label="See Discussion" />
            </Link>
            <a href={domain} target="_blank" rel="noopener noreferrer"><RaisedButton className={css(styles.bottomButton)} label="View Original Article" /></a>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    );
  }
}

ArticleCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  domain: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  annotationContent: React.PropTypes.string.isRequired,
  numUsers: React.PropTypes.number.isRequired,
  numAnnotations: React.PropTypes.number.isRequired,
  numReplies: React.PropTypes.number.isRequired,
  username: React.PropTypes.string.isRequired,
  points: React.PropTypes.number.isRequired,
  timeSince: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  currentVotes: React.PropTypes.number.isRequired,
  slug: React.PropTypes.string.isRequired,
};

export default ArticleCard;
