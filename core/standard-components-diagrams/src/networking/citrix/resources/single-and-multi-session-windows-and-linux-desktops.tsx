import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_AND_MULTI_SESSION_WINDOWS_AND_LINUX_DESKTOPS = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.single_and_multi_session_windows_and_linux_desktops;',
  _width: 48.85,
  _height: 50,
}

export function SingleAndMultiSessionWindowsAndLinuxDesktops(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...SINGLE_AND_MULTI_SESSION_WINDOWS_AND_LINUX_DESKTOPS}
      {...props}
    />
  )
}
