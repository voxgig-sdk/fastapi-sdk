<?php
declare(strict_types=1);

// Fastapi SDK exists test

require_once __DIR__ . '/../fastapi_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FastapiSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
