import React from 'react';

type Props = {
  children?: never;
  className?: string;
  debuggerContext: any;
};

type State = {};

class Repeat extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const video: any = document.querySelector('#video');
    if (video == null) throw new Error();
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('Something went wrong!');
        });
    }
  }

  public render() {
    return (
      <div>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video autoPlay id='video' />
      </div>
    );
  }
}

export default {
  toSpawn: () => true,
  body: (debuggerContext: any) => <Repeat debuggerContext={debuggerContext} />,
  label: 'Repeat Test Tab',
  iconName: 'build',
};
