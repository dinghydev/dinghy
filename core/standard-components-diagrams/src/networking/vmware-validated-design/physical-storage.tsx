import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHYSICAL_STORAGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.physical_storage;',
  },
  _original_width: 50,
  _original_height: 35.5,
}

export function PhysicalStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHYSICAL_STORAGE}
      {...props}
      _style={extendStyle(PHYSICAL_STORAGE, props)}
    />
  )
}
