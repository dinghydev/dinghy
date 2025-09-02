import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEEP_DRY = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.keep_dry;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 83,
  _original_height: 99,
}

export function KeepDry(props: DiagramNodeProps) {
  return (
    <Shape {...KEEP_DRY} {...props} _style={extendStyle(KEEP_DRY, props)} />
  )
}
