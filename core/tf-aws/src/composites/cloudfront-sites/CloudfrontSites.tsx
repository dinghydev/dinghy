import { OriginType, useCloudfrontSites } from './useCloudfrontSites.ts'
import { existsSync } from '@std/fs/exists'
import { walkSync } from '@std/fs/walk'
import { contentType } from '@std/media-types'
import {
  deepResolve,
  hostAppHome,
  NodeProps,
  Shape,
  toId,
} from '@dinghy/base-components'
import {
  AwsRoute53Record,
  DataAwsRoute53Zone,
  useAwsRoute53Zone,
} from '@dinghy/tf-aws/serviceRoute53'
import { CloudfrontSiteType } from './useCloudfrontSites.ts'
import {
  AwsS3Bucket,
  AwsS3BucketLogging,
  AwsS3BucketPolicy,
  useAwsS3Bucket,
} from '@dinghy/tf-aws/serviceS3'
import {
  useAwsGlobalLogBucket,
  useAwsRegionalLogBucket,
} from '@dinghy/tf-aws/foundation'
import {
  AwsCloudfrontDistribution,
  AwsCloudfrontFunction,
  AwsCloudfrontOriginAccessControl,
  useAwsCloudfrontDistribution,
  useAwsCloudfrontFunction,
  useAwsCloudfrontOriginAccessControl,
} from '@dinghy/tf-aws/serviceCloudfront'
import {
  AwsAcmCertificate,
  useAwsAcmCertificate,
} from '@dinghy/tf-aws/serviceAcm'
import { Text } from '@dinghy/diagrams/entitiesGeneral'
import { AwsS3Object } from '../../services/s3/AwsS3Object.tsx'

function getContentType(filePath: string): string {
  const extension = filePath.split('.').pop()?.toLowerCase() || ''
  return contentType(`.${extension}`) || 'application/octet-stream'
}

export function CloudfrontSites(
  { _components, _configs, ...props }: NodeProps,
) {
  const sites = useCloudfrontSites(props.sites)

  function CloudfrontSite({ site }: { site: CloudfrontSiteType }) {
    const { logBucket } = useAwsRegionalLogBucket()
    const redirectFunctionId = `${toId(`${site.title}_redirect_function`)}`

    const domainNameZone = (name: string) => {
      const twoLevelZone = name.split('.').slice(-2).join('.')
      if (site.zoneNames.includes(twoLevelZone)) {
        return twoLevelZone
      }
      return name.split('.').slice(-3).join('.')
    }
    const Zones = () => {
      const ZonesComponent: any = _components?.zones || Shape
      const ZoneComponent: any = _components?.zone || DataAwsRoute53Zone
      return (
        <ZonesComponent _display='none'>
          {site.zoneNames.map((zone) => (
            <ZoneComponent
              key={zone}
              name={zone}
              _consolidatedId={toId(`${zone}_zone`)}
              _id={toId(`${site.title}_${zone}`)}
              _title={zone}
            />
          ))}
        </ZonesComponent>
      )
    }
    const Distribution = ({ type }: { type: 'site' | 'redirect' }) => {
      const isRedirect = type === 'redirect'
      const comment = isRedirect ? `Redirect to ${site.title}` : site.title
      const { accessControl } = useAwsCloudfrontOriginAccessControl(
        toId(`${site.title}_originaccesscontrol`),
      )
      const aliases: string[] = isRedirect
        ? site.redirectFromNames!
        : site.alternativeNames!

      const AliasesRecords = () => {
        const AliasesRecord = ({ alias }: { alias: string }) => {
          const { route53Zone } = useAwsRoute53Zone(
            toId(`${site.title}_${domainNameZone(alias)}`),
          )
          const { cloudfrontDistribution } = useAwsCloudfrontDistribution(
            toId(`${site.title}_${type}`),
          )
          return (
            <AwsRoute53Record
              _id={toId(
                `${alias.replace('*', 'star_')}_arecord`,
              )}
              _title={alias}
              type='A'
              name={alias}
              zone_id={() => route53Zone.id}
              alias={() => ({
                name: cloudfrontDistribution.domain_name,
                zone_id: cloudfrontDistribution.hosted_zone_id,
                evaluate_target_health: false,
              })}
            />
          )
        }
        return (
          <Shape
            _direction='vertical'
            _padding={{ left: 1, right: 1, bottom: 1 }}
          >
            <Text
              _direction='vertical'
              _display='entity'
              _title={`<table>${
                aliases.map((alias) => `<tr><td>🌐 ${alias}</td></tr>`).join('')
              }</table>`}
              _width={aliases.map((alias) => alias.length).reduce(
                (max, length) => Math.max(max, length),
                0,
              ) * 9}
              _height={aliases.length * 15 + 40}
              _margin={{ top: 1, bottom: 1 }}
            />
            <Shape
              _title='Records Definations'
              _display='none'
              _direction='vertical'
            >
              {aliases.map((alias) => (
                <AliasesRecord
                  key={alias}
                  alias={alias}
                />
              ))}
            </Shape>
          </Shape>
        )
      }

      const AliasesCertificates = () => {
        const Certificate = ({ version }: { version: string }) => {
          const { acmCertificate } = useAwsAcmCertificate(
            toId(`${site.title}_${type}_${version}_certificate`),
          )
          const ValidateCname = ({ alias }: { alias: string }) => {
            const { route53Zone } = useAwsRoute53Zone(
              toId(`${site.title}_${domainNameZone(alias)}`),
            )
            const domainValidationOptionsValue = (key: string) => {
              return `\${one([\n  for dvo in ${
                deepResolve(acmCertificate._terraformId)
              }.domain_validation_options :\n  dvo if dvo.domain_name == \"${alias}\"\n]).${key}}`
            }
            const consolidatedId = toId(
              `${alias.replace('*', 'star_')}_validation_cname`,
            )
            return (
              <AwsRoute53Record
                _id={toId(
                  `${site.title}_${type}_${version}_${consolidatedId}`,
                )}
                _consolidatedId={consolidatedId}
                type='CNAME'
                ttl={60}
                _title={() => `For validating ${alias}`}
                name={() =>
                  domainValidationOptionsValue('resource_record_name')}
                records={() => [
                  domainValidationOptionsValue('resource_record_value'),
                ]}
                allow_overwrite
                zone_id={() => route53Zone.id}
              />
            )
          }
          const ValidationCnames = () => {
            return (
              <Shape _direction='vertical'>
                {aliases.map((alias) => (
                  <ValidateCname
                    key={alias}
                    alias={alias}
                  />
                ))}
              </Shape>
            )
          }
          return (
            <AwsAcmCertificate
              _id={toId(`${site.title}_${type}_${version}_certificate`)}
              _title={`v${version}`}
              _display='entity'
              region='us-east-1'
              validation_method='DNS'
              domain_name={aliases[0]}
              subject_alternative_names={aliases.slice(1)}
              tags={() => ({
                'iac:id': toId(
                  `${site.title}_${type}_${version}_certificate`,
                ),
              })}
              lifecycle={{
                ignore_changes: ['subject_alternative_names', 'domain_name'],
              }}
            >
              <ValidationCnames />
            </AwsAcmCertificate>
          )
        }

        const CertificatesComponent =
          _components?.certificates as typeof Shape || Shape
        return (
          <CertificatesComponent _display='invisible' _direction='vertical'>
            {site.certVersions.map((version) => (
              <Certificate
                key={version}
                version={version}
              />
            ))}
          </CertificatesComponent>
        )
      }

      const RedirectFunction = (
        { id, target, pathPattern }: {
          id: string
          target: string
          pathPattern?: string
        },
      ) => {
        return (
          <AwsCloudfrontFunction
            _id={id}
            name={id}
            _display='none'
            runtime='cloudfront-js-2.0'
            code={`
              function handler(event) {
                var request = event.request;
                ${
              target.includes('{PATH}')
                ? `var path = request.uri.substring(${
                  pathPattern!.length - 1
                });`
                : ''
            }
                var newUrl = ${
              target.includes('{PATH}')
                ? `'${target}'.replace('{PATH}',path)`
                : `'${target}'`
            };
                var response = {
                  statusCode: 301,
                  statusDescription: 'Moved Permanently',
                  headers: {
                    'location': { value: newUrl }
                  }
                };
                return response;
              }`}
            publish
            lifecycle={{
              ignore_changes: ['name'],
            }}
          />
        )
      }

      const HostRedirect = () => {
        return (
          <RedirectFunction
            id={redirectFunctionId}
            target={`https://${site.alternativeNames[0]}`}
          />
        )
      }

      const { acmCertificate } = useAwsAcmCertificate(
        toId(`${site.title}_${type}_${site.certVersions[0]}_certificate`),
      )

      const { cloudfrontFunction: hostRedirectFunction } =
        useAwsCloudfrontFunction(
          redirectFunctionId,
        )

      const Origins = () => {
        const OriginsComponent = _components?.origins as typeof Shape || Shape
        const OriginTableComponent = _components?.originTable as typeof Text ||
          Text
        const origins = site.origins
        const _width = Math.max(
          ...Object.values(origins).map((origin) =>
            (origin.pathPattern.length + origin.target.length) * 7
          ),
        )
        const table = `<table>${
          Object.values(origins).map((origin) =>
            `<tr><td>${origin.pathPattern}</td><td>➙ ${origin.target}</td></tr>`
          ).join('')
        }</table>`

        const S3Origin = ({ origin }: { origin: OriginType }) => {
          const originFiles = `${hostAppHome}/s3-files/${origin.targetHost}`
          const originFilesExists = existsSync(originFiles)
          const Files = () => {
            const files = []
            for (
              const entry of walkSync(originFiles, { includeDirs: false })
            ) {
              files.push({
                source: entry.path,
                target: entry.path.replace(originFiles, ''),
                contentType: getContentType(entry.path),
              })
            }
            return (
              <Shape _direction='vertical'>
                {files.map((file) => (
                  <AwsS3Object
                    _id={toId(`${site.title}_${origin.name}_${file.target}`)}
                    _title={file.target}
                    bucket={origin.targetHost}
                    key={file.target}
                    __key={file.target}
                    cache_control={origin.fileCacheControl}
                    content_type={file.contentType}
                    source={file.source}
                  />
                ))}
              </Shape>
            )
          }
          const { cloudfrontDistribution } = useAwsCloudfrontDistribution()
          const S3OriginComponent =
            _components?.s3Origin as typeof AwsS3Bucket || AwsS3Bucket
          const S3OriginLoggingComponent =
            _components?.s3OriginLogging as typeof AwsS3BucketLogging ||
            AwsS3BucketLogging
          const S3OriginPolicyComponent =
            _components?.s3OriginPolicy as typeof AwsS3BucketPolicy ||
            AwsS3BucketPolicy
          return (
            <S3OriginComponent
              _id={toId(`${site.title}_${origin.name}_bucket`)}
              _title={`Origin Bucket: ${site.title} ${origin.name}`}
              bucket={origin.targetHost}
              _display='none'
              _direction='vertical'
              _distributed
            >
              <S3OriginLoggingComponent
                _id={toId(`${site.title}_${origin.name}_bucketlogging`)}
                bucket={origin.targetHost}
                target_bucket={logBucket.bucket}
                target_prefix={`s3-access-log/${origin.targetHost}/`}
              />

              <S3OriginPolicyComponent
                _id={toId(`${site.title}_${origin.name}_bucketpolicy`)}
                bucket={origin.targetHost}
                policy={() =>
                  JSON.stringify(deepResolve({
                    'Version': '2008-10-17',
                    'Id': 'PolicyForCloudFrontPrivateContent',
                    'Statement': [
                      {
                        'Sid': 'AllowCloudFrontServicePrincipal',
                        'Effect': 'Allow',
                        'Principal': {
                          'Service': 'cloudfront.amazonaws.com',
                        },
                        'Action': 's3:GetObject',
                        'Resource': `arn:aws:s3:::${origin.targetHost}/*`,
                        'Condition': {
                          'ArnLike': {
                            'AWS:SourceArn': [cloudfrontDistribution.arn],
                          },
                        },
                      },
                    ],
                  }))}
              />
              {originFilesExists && <Files />}
            </S3OriginComponent>
          )
        }

        return (
          <OriginsComponent
            _padding={{ left: 1, right: 1, bottom: 1 }}
            _direction='vertical'
          >
            <OriginTableComponent
              origins={origins}
              _title={table}
              _width={_width}
              _margin={{ top: 1, bottom: 1 }}
              _id={toId(`${site.title}_${type}_origins_table`)}
            />
            {Object.values(origins).map((origin) => (
              origin.targetProtocol === 's3' && (
                <S3Origin origin={origin} key={origin.pathPattern} />
              )
            ))}
            {Object.values(origins).map((origin) => (
              origin.targetProtocol === 'https' && (
                <RedirectFunction
                  id={`${
                    toId(`${site.title}_${origin.name}_redirect_function`)
                  }`}
                  target={origin.target}
                  pathPattern={origin.pathPattern}
                  key={origin.pathPattern}
                />
              )
            ))}
          </OriginsComponent>
        )
      }

      const { logBucket: globalLogBucket } = useAwsGlobalLogBucket()
      const s3Origins = Object.values(site.origins)
        .filter((origin) => origin.targetProtocol === 's3')
        .map((origin) => ({
          name: origin.name,
          data: useAwsS3Bucket(toId(`${site.title}_${origin.name}_bucket`)),
        }))
      const redirectFunctions = Object.values(site.origins)
        .filter((origin) => origin.targetProtocol === 'https')
        .map((origin) => ({
          name: origin.name,
          data: useAwsCloudfrontFunction(
            toId(`${site.title}_${origin.name}_redirect_function`),
          ),
        }))
      const singleOrigin = (origin: OriginType) => ({
        origin_id: origin.name,
        domain_name: origin.targetProtocol == 's3'
          ? s3Origins.find((o) => o.name === origin.name)!.data.s3Bucket
            .bucket_regional_domain_name
          : undefined,
        origin_path: origin.targetPath,
        origin_access_control_id: origin.targetProtocol == 's3'
          ? accessControl.id
          : undefined,
      })
      const distributionOrigin = () =>
        isRedirect
          ? [
            singleOrigin(firstOrigin),
          ]
          : Object.values(site.origins).filter((o) =>
            o.targetProtocol !== 'https'
          ).map(singleOrigin)

      const defaultOrigin = Object.values(site.origins).find(
        (origin) => origin.pathPattern === '*',
      )!

      const firstOrigin = Object.values(site.origins).find(
        (origin) => origin.targetProtocol !== 'https',
      )!

      const cacheBehaviors = (isDefault: boolean) => () => {
        const cacheBehavior = (origin: OriginType) => ({
          path_pattern: origin.pathPattern !== '*'
            ? origin.pathPattern
            : undefined,
          allowed_methods: ['GET', 'HEAD'],
          cached_methods: ['GET', 'HEAD'],
          target_origin_id: (isRedirect || origin.targetProtocol === 'https')
            ? firstOrigin.name
            : origin.name,
          viewer_protocol_policy: 'redirect-to-https',
          cache_policy_id: '658327ea-f89d-4fab-a63d-7e88639e58f6', // Managed-CachingOptimized
          function_association: isRedirect
            ? [{
              event_type: 'viewer-request',
              function_arn: hostRedirectFunction.arn,
            }]
            : origin.targetProtocol === 'https'
            ? [{
              event_type: 'viewer-request',
              function_arn: redirectFunctions.find((o) =>
                o.name === origin.name
              )!.data.cloudfrontFunction
                .arn,
            }]
            : [],
          ...((isRedirect ? firstOrigin : origin)!.cacheBehavior || {}),
        })

        return isDefault
          ? cacheBehavior(defaultOrigin)
          : Object.values(site.origins).filter(
            (origin) => origin.pathPattern !== '*',
          ).map((origin) => cacheBehavior(origin))
      }

      const DistributionComponent =
        _components?.distribution as typeof AwsCloudfrontDistribution ||
        AwsCloudfrontDistribution
      const DistributionCol1Component =
        _components?.distributionCol1 as typeof Shape || Shape
      const DistributionCol2Component =
        _components?.distributionCol2 as typeof Shape || Shape
      return (
        <DistributionComponent
          _id={toId(`${site.title}_${type}`)}
          _title={`Distribution: ${comment}`}
          comment={comment}
          _display={site.redirectFromNames ? undefined : 'invisible'}
          enabled
          restrictions={{ geo_restriction: { restriction_type: 'none' } }}
          origin={distributionOrigin}
          default_cache_behavior={cacheBehaviors(true)}
          ordered_cache_behavior={isRedirect
            ? undefined
            : cacheBehaviors(false)}
          default_root_object={site.defaultRootObject || undefined}
          aliases={aliases}
          viewer_certificate={() => ({
            acm_certificate_arn: acmCertificate.arn,
            minimum_protocol_version: 'TLSv1.2_2021', // recommended by AWS as of 2025-12-09
            ssl_support_method: 'sni-only',
          })}
          logging_config={() => ({
            bucket: globalLogBucket.bucket_domain_name,
            prefix: `cloudfront-accesslog/${toId(site.title)}_${type}/`,
          })}
          {...site}
          {...(_configs?.distribution || {})}
        >
          <DistributionCol1Component _display='invisible' _direction='vertical'>
            <AliasesRecords />
            {!isRedirect && <Origins />}
          </DistributionCol1Component>
          <DistributionCol2Component _display='invisible' _direction='vertical'>
            {isRedirect && <HostRedirect />}
            <AliasesCertificates />
            {!isRedirect &&
              Object.values(site.origins).find((o) =>
                o.targetProtocol === 's3'
              ) && (
              <AwsCloudfrontOriginAccessControl
                _id={toId(`${site.title}_originaccesscontrol`)}
                _display='none'
                name={`oac-${toId(`${site.title}`)}`}
                origin_access_control_origin_type='s3'
                signing_behavior='always'
                signing_protocol='sigv4'
              />
            )}
          </DistributionCol2Component>
        </DistributionComponent>
      )
    }
    const Distributions = () => {
      const DistributionsComponent =
        _components?.distributions as typeof Shape || Shape
      return (
        <DistributionsComponent _direction='vertical' _display='invisible'>
          <Distribution type='site' />
          {site.redirectFromNames && <Distribution type='redirect' />}
        </DistributionsComponent>
      )
    }

    const SiteComponent = _components?.site as typeof Shape || Shape
    return (
      <SiteComponent
        _site={site}
        _title={site.title}
        _direction='vertical'
        {...(_configs?.site || {})}
      >
        <Distributions />
        <Zones />
      </SiteComponent>
    )
  }

  const SitesComponent = _components?.sites as typeof Shape || Shape
  return (
    <SitesComponent
      _sites={sites}
      _direction='vertical'
      _display={Object.keys(sites).length === 1 ? 'invisible' : undefined}
      {...props}
      {...(_configs?.sites || {})}
    >
      {Object.values(sites).map((site) => (
        <CloudfrontSite
          key={site.title}
          site={site}
        />
      ))}
    </SitesComponent>
  )
}
