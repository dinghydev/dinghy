import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOWS_APPS = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.windows_apps;',
  _width: 50,
  _height: 42.285000000000004,
}

export function WindowsApps(props: DiagramNodeProps) {
  return <Shape {...WINDOWS_APPS} {...props} />
}
