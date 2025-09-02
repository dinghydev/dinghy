import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINUX_APP = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.linux_app;',
  },
  _original_width: 50,
  _original_height: 49.345,
}

export function LinuxApp(props: DiagramNodeProps) {
  return (
    <Shape {...LINUX_APP} {...props} _style={extendStyle(LINUX_APP, props)} />
  )
}
