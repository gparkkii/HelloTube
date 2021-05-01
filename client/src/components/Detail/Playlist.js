import React, { useEffect, useCallback } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { PermMedia } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPlaylist,
  deletePlaylist,
  getIsPlaylist,
} from 'modules/reducers/playlist';
import { InfoIcons } from 'styles/form';

const Playlist = ({ videoId, userId }) => {
  const dispatch = useDispatch();
  const Playlists = useSelector(state => state.playlist);

  useEffect(() => {
    dispatch(getIsPlaylist({ userId, videoId }));
  }, [userId, videoId]);

  const onSaveList = useCallback(() => {
    if (!userId) {
      alert('로그인이 필요한 동작입니다.');
    } else if (!Playlists.isPlaylist) {
      dispatch(addPlaylist({ videoId, userId }));
    } else {
      dispatch(deletePlaylist({ videoId, userId }));
    }
  }, [userId, videoId, Playlist]);

  return (
    <InfoIcons isActive={Playlists.isPlaylist}>
      <span>
        <Tooltip title="저장">
          <IconButton onClick={onSaveList}>
            <PermMedia />
          </IconButton>
        </Tooltip>
        <p>저장</p>
      </span>
    </InfoIcons>
  );
};

export default Playlist;