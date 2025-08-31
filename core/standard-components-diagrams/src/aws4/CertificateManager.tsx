import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CERTIFICATE_MANAGER_COLOR = '#7AA116'
export const CERTIFICATE_MANAGER = {
  _shape: { entity: 'mxgraph.aws4.certificate_manager' },
  _style: {
    element: {
      strokeColor: CERTIFICATE_MANAGER_COLOR,
      fontColor: CERTIFICATE_MANAGER_COLOR,
    },
    entity: {
      fillColor: CERTIFICATE_MANAGER_COLOR,
    },
  },
}

export function CertificateManager(props: DiagramNodeProps) {
  return <Shape {...CERTIFICATE_MANAGER} {...props} />
}
