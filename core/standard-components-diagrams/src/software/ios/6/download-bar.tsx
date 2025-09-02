import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOWNLOAD_BAR = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iDownloadBar;verticalAlign=top;spacingTop=-4;fontSize=8;fontColor=#ffffff;buttonText=;barPos=30;align=center;sketch=0;whiteSpace=wrap;',
  },
  _original_width: 174,
  _original_height: 30,
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
