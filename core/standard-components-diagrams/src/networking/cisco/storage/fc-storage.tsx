import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FC_STORAGE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.storage.fc_storage;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 77,
  _original_height: 43,
}

export function FcStorage(props: DiagramNodeProps) {
  return (
    <Shape {...FC_STORAGE} {...props} _style={extendStyle(FC_STORAGE, props)} />
  )
}
