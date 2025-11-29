import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOWNLOAD_DISTRIBUTION = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.download_distribution;fillColor=#F58536;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 72,
}

export function DownloadDistribution(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOWNLOAD_DISTRIBUTION)} />
}
