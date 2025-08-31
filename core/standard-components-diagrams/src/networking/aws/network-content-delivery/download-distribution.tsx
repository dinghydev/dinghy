import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOWNLOAD_DISTRIBUTION = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.download_distribution;',
  _width: 60,
  _height: 60,
}

export function DownloadDistribution(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOWNLOAD_DISTRIBUTION}
      {...props}
      _style={extendStyle(DOWNLOAD_DISTRIBUTION, props)}
    />
  )
}
