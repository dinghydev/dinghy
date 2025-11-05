import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=device;',
  },
  _width: 150,
  _height: 75,
}

export function Device(props: NodeProps) {
  return <Shape {...DEVICE} {...props} _style={extendStyle(DEVICE, props)} />
}
