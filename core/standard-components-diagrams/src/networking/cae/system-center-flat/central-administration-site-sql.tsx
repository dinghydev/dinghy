import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTRAL_ADMINISTRATION_SITE_SQL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#515151;shape=mxgraph.mscae.system_center.central_administration_site_sql',
  },
  _width: 38,
  _height: 50,
}

export function CentralAdministrationSiteSql(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRAL_ADMINISTRATION_SITE_SQL}
      {...props}
      _style={extendStyle(CENTRAL_ADMINISTRATION_SITE_SQL, props)}
    />
  )
}
