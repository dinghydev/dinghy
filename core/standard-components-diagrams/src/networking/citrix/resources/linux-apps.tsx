import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LINUX_APPS = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.linux_apps;',
  _width: 42.714999999999996,
  _height: 50,
}

export function LinuxApps(props: DiagramNodeProps) {
  return <Shape {...LINUX_APPS} {...props} />
}
