import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLE_LOAD_TESTING_CONTROLLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_load_testing_controller;',
  },
  _original_width: 24,
  _original_height: 24,
}

export function RoleLoadTestingController(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ROLE_LOAD_TESTING_CONTROLLER)}
    />
  )
}
