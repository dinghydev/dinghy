import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_STACK = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.storage_stack;',
  },
  _width: 40,
  _height: 40,
}

export function StorageStack(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_STACK}
      {...props}
      _style={extendStyle(STORAGE_STACK, props)}
    />
  )
}
