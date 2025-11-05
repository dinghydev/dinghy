import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NAS_FILER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.nas_filer;',
  },
  _width: 100,
  _height: 35,
}

export function NasFiler(props: NodeProps) {
  return (
    <Shape {...NAS_FILER} {...props} _style={extendStyle(NAS_FILER, props)} />
  )
}
