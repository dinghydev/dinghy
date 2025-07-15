import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLE_LOAD_TESTING_LAUNCHER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_load_testing_launcher;',
  _width: 41,
  _height: 38,
}

export function RoleLoadTestingLauncher(props: DiagramNodeProps) {
  return <Shape {...ROLE_LOAD_TESTING_LAUNCHER} {...props} />
}
