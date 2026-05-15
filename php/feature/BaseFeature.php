<?php
declare(strict_types=1);

// Fastapi SDK base feature

class FastapiBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FastapiContext $ctx, array $options): void {}
    public function PostConstruct(FastapiContext $ctx): void {}
    public function PostConstructEntity(FastapiContext $ctx): void {}
    public function SetData(FastapiContext $ctx): void {}
    public function GetData(FastapiContext $ctx): void {}
    public function GetMatch(FastapiContext $ctx): void {}
    public function SetMatch(FastapiContext $ctx): void {}
    public function PrePoint(FastapiContext $ctx): void {}
    public function PreSpec(FastapiContext $ctx): void {}
    public function PreRequest(FastapiContext $ctx): void {}
    public function PreResponse(FastapiContext $ctx): void {}
    public function PreResult(FastapiContext $ctx): void {}
    public function PreDone(FastapiContext $ctx): void {}
    public function PreUnexpected(FastapiContext $ctx): void {}
}
