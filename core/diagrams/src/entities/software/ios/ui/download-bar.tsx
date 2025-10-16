import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOWNLOAD_BAR = {
  _style: {
    entity:
      'html=1;strokeWidth=1;shadow=0;dashed=0;shape=mxgraph.ios7ui.downloadBar;verticalAlign=middle;fontSize=8;buttonText=;barPos=30;fillColor=#aaaaaa;strokeColor=#0080f0;align=center;',
  },
  _width: 150,
  _height: 30,
}

export function DownloadBar(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOWNLOAD_BAR}
      {...props}
      _style={extendStyle(DOWNLOAD_BAR, props)}
    />
  )
}
