import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROLE_LOAD_TESTING_LAUNCHER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_load_testing_launcher;',
  },
  _original_width: 41,
  _original_height: 38,
}

export function RoleLoadTestingLauncher(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLE_LOAD_TESTING_LAUNCHER}
      {...props}
      _style={extendStyle(ROLE_LOAD_TESTING_LAUNCHER, props)}
    />
  )
}
