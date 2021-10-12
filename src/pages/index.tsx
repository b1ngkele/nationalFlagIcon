import React, { FC, useState, useRef } from 'react'
import { Button, WingBlank } from 'antd-mobile';
import Background from '../assets/guoqi.png';

import styles from './index.less';

const Basic: FC = () => {
  const [file, setFileList] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef?.current?.click();
  };

  const onInputChange = () => {
    const resultFile = inputRef?.current?.files;
    if (resultFile) {
      const reader = new FileReader();
      reader.readAsDataURL(resultFile[0]);
      reader.onload = function (e) {
        setFileList(e?.target?.result);
      }
    }
  }

  return (
    <WingBlank size="md" >
      <div className={styles.imgWrap}>
        <div
          style={{
            width: '100%',
            flex: '1',
            height: '100%',
            backgroundImage: `url(${file})`
          }}
          className={styles.imgItem}
        >
          <div
            className={styles.imgItemInner}
            style={{ backgroundImage: file ? "url(" + Background + ")" : "none" }}
          />
        </div>
      </div>
      <Button type="primary" onClick={onClick}>上传图片</Button>
      <input type="file" style={{ display: 'none' }} ref={inputRef} onChange={onInputChange} />
    </WingBlank>
  )
}

export default Basic;
