import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTERNAL_STORAGE = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.external_storage;',
  },
  _original_width: 90,
  _original_height: 100,
}

export function ExternalStorage(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EXTERNAL_STORAGE)} />
}
