import { useState, useEffect, useRef } from "react";
import { PlayArrow, Pause, SkipNext, SkipPrevious } from "@material-ui/icons";

import song1 from "../../assets/van_vat_nhu_muon_ta_ben_nhau.mp3";
import song2 from "../../assets/Le_Duong.mp3";
import song3 from "../../assets/Dancing_In_The_Dark.mp3";

import styles from "./styles.module.css";

const PlaySong = ({ isInvitationOpen }) => {
  const playlist = [song1, song2, song3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(playlist[currentIndex]));

  // khi đổi bài thì load lại + gắn event "ended"
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(playlist[currentIndex]);
    audioRef.current.volume = 0.5;

    // khi kết thúc bài hiện tại thì tự động next
    audioRef.current.addEventListener("ended", handleNext);

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn("Play interrupted:", err);
      });
    }

    // cleanup tránh bị add nhiều lần
    return () => {
      audioRef.current.removeEventListener("ended", handleNext);
    };
    // eslint-disable-next-line
  }, [currentIndex]);

  // auto play khi mở thiệp
  useEffect(() => {
    if (isInvitationOpen) {
      handlePlay();
    }
    // eslint-disable-next-line
  }, [isInvitationOpen]);

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.volume = 0.5;
    audioRef.current
      .play()
      .catch((err) => {
        console.warn("Play error:", err);
      });
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handleRewind = () => {
    audioRef.current.currentTime = 0;
    if (!isPlaying) {
      handlePlay();
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  return (
    <div className={styles.playSongWrapper}>
      {/* Tua lại từ đầu */}
      <button onClick={handleRewind} className={styles.playSongButton}>
        <SkipPrevious style={{ fontSize: 24 }} />
      </button>

      {/* Play / Pause */}
      <button
        onClick={isPlaying ? handlePause : handlePlay}
        className={styles.playSongButton}
      >
        {isPlaying ? (
          <Pause style={{ fontSize: 24 }} />
        ) : (
          <PlayArrow style={{ fontSize: 24 }} />
        )}
      </button>

      {/* Bài tiếp */}
      <button onClick={handleNext} className={styles.playSongButton}>
        <SkipNext style={{ fontSize: 24 }} />
      </button>
    </div>
  );
};

export default PlaySong;
