import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_OBJECT_STORAGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.ibm_object_storage;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function IbmObjectStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_OBJECT_STORAGE}
      {...props}
      _style={extendStyle(IBM_OBJECT_STORAGE, props)}
    />
  )
}
