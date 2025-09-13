import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTEXTUAL_ACTION_BAR_LANDSCAPE = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.contextual_action_bar_landscape;fillColor=#002E3E;sketch=0;',
  },
  _width: 0,
  _height: 30,
}

export function ContextualActionBarLandscape(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTEXTUAL_ACTION_BAR_LANDSCAPE}
      {...props}
      _style={extendStyle(CONTEXTUAL_ACTION_BAR_LANDSCAPE, props)}
    />
  )
}
