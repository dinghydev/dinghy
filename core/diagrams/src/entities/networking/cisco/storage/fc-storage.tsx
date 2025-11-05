import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FC_STORAGE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.storage.fc_storage;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 77,
  _height: 43,
}

export function FcStorage(props: NodeProps) {
  return (
    <Shape {...FC_STORAGE} {...props} _style={extendStyle(FC_STORAGE, props)} />
  )
}
