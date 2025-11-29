import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOWNLOAD_BAR = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iDownloadBar;verticalAlign=top;spacingTop=-4;fontSize=8;fontColor=#ffffff;buttonText=;barPos=30;align=center;sketch=0;whiteSpace=wrap;',
  },
  _width: 174,
  _height: 30,
}

export function DownloadBar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOWNLOAD_BAR)} />
}
