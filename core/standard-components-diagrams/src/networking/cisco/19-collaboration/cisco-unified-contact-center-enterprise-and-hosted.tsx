import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_UNIFIED_CONTACT_CENTER_ENTERPRISE_AND_HOSTED = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=cisco_unified_contact_center_enterprise_and_hosted;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _width: 64,
  _height: 50,
}

export function CiscoUnifiedContactCenterEnterpriseAndHosted(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CISCO_UNIFIED_CONTACT_CENTER_ENTERPRISE_AND_HOSTED}
      {...props}
      _style={extendStyle(
        CISCO_UNIFIED_CONTACT_CENTER_ENTERPRISE_AND_HOSTED,
        props,
      )}
    />
  )
}
