import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHARED_CONTROL_DISPLAY_IN_DCS_INACCESSIBLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.sharedCont;mounting=inaccessible',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SharedControlDisplayInDcsInaccessible(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARED_CONTROL_DISPLAY_IN_DCS_INACCESSIBLE}
      {...props}
      _style={extendStyle(SHARED_CONTROL_DISPLAY_IN_DCS_INACCESSIBLE, props)}
    />
  )
}
