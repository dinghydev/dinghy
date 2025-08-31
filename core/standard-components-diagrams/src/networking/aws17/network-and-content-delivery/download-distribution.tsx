import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOWNLOAD_DISTRIBUTION = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.download_distribution;fillColor=#F58536;gradientColor=none;',
  },
  _width: 69,
  _height: 72,
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
