import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APIC = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.apic;',
  _width: 50,
  _height: 40.5,
}

export function Apic(props: DiagramNodeProps) {
  return <Shape {...APIC} {...props} _style={extendStyle(APIC, props)} />
}
