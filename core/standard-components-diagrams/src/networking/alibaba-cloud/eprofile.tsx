import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EPROFILE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.eprofile;',
  },
  _width: 50.099999999999994,
  _height: 43.199999999999996,
}

export function Eprofile(props: DiagramNodeProps) {
  return (
    <Shape {...EPROFILE} {...props} _style={extendStyle(EPROFILE, props)} />
  )
}
