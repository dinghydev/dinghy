import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOWNLOAD_BAR = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iDownloadBar;verticalAlign=top;spacingTop=-4;fontSize=8;fontColor=#ffffff;buttonText=;barPos=30;align=center;sketch=0;whiteSpace=wrap;',
  _width: 174,
  _height: 30,
}

export function DownloadBar(props: DiagramNodeProps) {
  return <Shape {...DOWNLOAD_BAR} {...props} />
}
