import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LICENSE_FILE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.license_file;',
  },
  _width: 28.000000000000004,
  _height: 39,
}

export function LicenseFile(props: DiagramNodeProps) {
  return (
    <Shape
      {...LICENSE_FILE}
      {...props}
      _style={extendStyle(LICENSE_FILE, props)}
    />
  )
}
