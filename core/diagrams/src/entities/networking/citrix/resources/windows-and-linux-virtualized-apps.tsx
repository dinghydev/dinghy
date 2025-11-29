import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOWS_AND_LINUX_VIRTUALIZED_APPS = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.windows_and_linux_virtualized_apps;',
  },
  _width: 50,
  _height: 39.519999999999996,
}

export function WindowsAndLinuxVirtualizedApps(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, WINDOWS_AND_LINUX_VIRTUALIZED_APPS)}
    />
  )
}
