import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NONCOMPLIANT_APPS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.noncompliant_apps',
  },
  _original_width: 46,
  _original_height: 50,
}

export function NoncompliantApps(props: DiagramNodeProps) {
  return (
    <Shape
      {...NONCOMPLIANT_APPS}
      {...props}
      _style={extendStyle(NONCOMPLIANT_APPS, props)}
    />
  )
}
